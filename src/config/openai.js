import OpenAI from 'openai';

// 建議將 API 金鑰放在環境變數中
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || 'openAI key';

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

export const chatWithAI = async (message) => {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "你是一個友善且專業的 AI 助手，請以中文回覆使用者的問題。"
                },
                {
                    role: "user",
                    content: message
                }
            ],
            temperature: 0.7,
            max_tokens: 1000,
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error('OpenAI API Error:', error);
        throw error;
    }
};

export default openai;
