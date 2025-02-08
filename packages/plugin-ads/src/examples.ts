import { ActionExample } from "@elizaos/core";

export const getAdResponseExamples: ActionExample[][] =
[
    [
        {
            "user": "{{user1}}",
            "content": {
                "text": "Can you recommend some unique restaurants in Tokyo for a special anniversary dinner?"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "I'll search for extraordinary dining experiences in Tokyo that would be perfect for your anniversary.",
                "action": "GET_RESPONSE_WITH_AD"
            }
        },
        {
            "user": "{{user1}}",
            "content": {
                text: ` ["◎  New Tweet found 
   https://twitter.com/cryptopyar/status/18872448562104587585759 "] `,
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "Response tracked",
                "action": "CALLBACK_RESPONSE"
            }
        }

    ],
    [
        {
            "user": "{{user1}}",
            "content": {
                "text": "I want to invest in cryptocurrency. What's the best strategy for a $10,000 investment?"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "I'll analyze current crypto market trends and suggest a diversified investment strategy.",
                "action": "GET_RESPONSE_WITH_AD"
            }
        },
        {
            "user": "{{user1}}",
            "content": {
                text: ` ["◎  New Tweet found 
   https://twitter.com/cryptopyar/status/18872448562104587585759 "] `,
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "Response tracked",
                "action": "CALLBACK_RESPONSE"
            }
        }
    ],
    [
        {
            "user": "{{user1}}",
            "content": {
                "text": "What are the best adventure activities available in New Zealand for a 7-day trip?"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "I'll search for the top-rated adventure activities across New Zealand that can fit into a week-long itinerary.",
                "action": "GET_RESPONSE_WITH_AD"
            }
        },
        {
            "user": "{{user1}}",
            "content": {
                text: ` ["◎  New Tweet found 
   https://twitter.com/cryptopyar/status/18872448562104587585759 "] `,
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "Response tracked",
                "action": "CALLBACK_RESPONSE"
            }
        }
    ],
    [
        {
            "user": "{{user1}}",
            "content": {
                "text": "What sustainable tourism options are available in Costa Rica?"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "I'll research eco-friendly accommodations and activities in Costa Rica that support sustainable tourism.",
                "action": "GET_RESPONSE_WITH_AD"
            }
        },
        {
            "user": "{{user1}}",
            "content": {
                text: ` ["◎  New Tweet found 
   https://twitter.com/cryptopyar/status/18872448562104587585759 "] `,
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "Response tracked",
                "action": "CALLBACK_RESPONSE"
            }
        }
    ],
    [
        {
            "user": "{{user1}}",
            "content": {
                "text": "I'm interested in starting a small business in Singapore. What sectors show the most promise?"
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "I'll analyze Singapore's current business environment and growth sectors for small business opportunities.",
                "action": "GET_RESPONSE_WITH_AD"
            }
        },
        {
            "user": "{{user1}}",
            "content": {
                text: ` ["◎  New Tweet found 
   https://twitter.com/cryptopyar/status/18872448562104587585759 "] `,
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "Response tracked",
                "action": "CALLBACK_RESPONSE"
            }
        }
    ]
]

export const callbackResponseExamples: ActionExample[][] = [
    [
        {
            "user": "{{user1}}",
            "content": {
                text: ` ["◎ New Tweet found 
   https://twitter.com/cryptopyar/status/1887244856210440550 "] `,
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "Response tracked",
                "action": "CALLBACK_RESPONSE"
            }
        }
    ]
    ,
     [
        {
            "user": "{{user1}}",
            "content": {
                text: ` ["◎  New Tweet found 
   https://twitter.com/cryptopyar/status/18872448562104587585759 "] `,
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "Response tracked",
                "action": "CALLBACK_RESPONSE"
            }
        }
    ],
    [
        {
            "user": "{{user1}}",
            "content": {
                text: ` [" New Tweet found 
   https://twitter.com/cryptopyar/status/188724485621044785875"] `,
            }
        },
        {
            "user": "{{agent}}",
            "content": {
                "text": "Response tracked",
                "action": "CALLBACK_RESPONSE"
            }
        }
    ]
]

