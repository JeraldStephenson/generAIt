import { MessageSquare } from "lucide-react";

import { Heading } from "@/components/heading";


const ConversationPage = () => {
    return (
        <Heading
            title="Conversation"
            description="What would you like to know?"
            icon={MessageSquare}
            iconColor="text-violet-500"
            bgColor="bg-violet-500/10"
        />
    )
}

export default ConversationPage;
