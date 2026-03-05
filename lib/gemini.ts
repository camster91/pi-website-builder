import { GoogleGenerativeAI, GenerativeModel, GenerateContentResult } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

// Model configurations
const MODELS = {
  planner: 'gemini-2.5-pro',
  coder: 'gemini-2.5-flash',
  qa: 'gemini-2.5-pro',
}

export type AgentType = keyof typeof MODELS

export interface GenerationOptions {
  temperature?: number
  maxOutputTokens?: number
  topP?: number
  topK?: number
}

export interface GenerationResult {
  text: string
  usage?: {
    promptTokens: number
    candidatesTokens: number
    totalTokens: number
  }
}

export class GeminiService {
  private getModel(agent: AgentType): GenerativeModel {
    return genAI.getGenerativeModel({ 
      model: MODELS[agent],
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    })
  }

  async generate(
    agent: AgentType,
    prompt: string,
    options?: GenerationOptions
  ): Promise<GenerationResult> {
    const model = this.getModel(agent)
    
    const result = await model.generateContent(prompt)
    const text = result.response.text()
    const usage = result.response.usageMetadata
    
    return {
      text,
      usage: usage ? {
        promptTokens: usage.promptTokenCount || 0,
        candidatesTokens: usage.candidatesTokenCount || 0,
        totalTokens: usage.totalTokenCount || 0,
      } : undefined,
    }
  }

  async generateWithSystemPrompt(
    agent: AgentType,
    systemPrompt: string,
    userPrompt: string,
    options?: GenerationOptions
  ) {
    const fullPrompt = `${systemPrompt}\n\n${userPrompt}`
    return this.generate(agent, fullPrompt, options)
  }

  // Specialized methods for each agent
  async generatePlan(prompt: string): Promise<any> {
    const systemPrompt = `You are a website planning expert. Analyze the user's request and create a detailed JSON plan for a website. Include:
1. Website structure (pages, navigation)
2. Design system (color palette, typography, spacing)
3. SEO strategy (keywords, meta descriptions, schema markup)
4. Conversion funnel (primary CTAs, lead magnets, contact methods)

Return valid JSON only.`
    
    const result = await this.generateWithSystemPrompt('planner', systemPrompt, prompt)
    return JSON.parse(result.text)
  }

  async generateCode(plan: any): Promise<string> {
    const systemPrompt = `You are a frontend developer. Given a website plan, generate clean, responsive HTML/CSS/JavaScript code.
- Use Tailwind CSS for styling (include via CDN)
- Use Alpine.js for interactivity (include via CDN)
- Ensure mobile-first responsive design
- Include accessibility features (ARIA labels, semantic HTML)
- Write human-readable code with comments

Return complete HTML files for each page.`
    
    const userPrompt = `Generate code for this website plan:\n${JSON.stringify(plan, null, 2)}`
    
    const result = await this.generate('coder', userPrompt)
    return result.text
  }

  async reviewAndImprove(code: string, plan: any): Promise<string> {
    const systemPrompt = `You are a QA engineer and marketing copywriter. Review the provided website code and:
1. Fix any responsive design issues
2. Improve accessibility (add missing ARIA labels, ensure proper contrast)
3. Write engaging, SEO-optimized copy
4. Optimize performance (suggest image sizing, lazy loading)
5. Ensure cross-browser compatibility

Return the improved code.`
    
    const userPrompt = `Plan:\n${JSON.stringify(plan, null, 2)}\n\nCode to review:\n${code}`
    
    const result = await this.generate('qa', userPrompt)
    return result.text
  }
}

export const gemini = new GeminiService()