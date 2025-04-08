"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React, { useState } from 'react'
enum CallStatus {
    INACTIVE = 'INACTIVE',
    ACTIVE = 'ACTIVE',
    CONNECTING = 'CONNECTING',
    FINISHED = 'FINISHED',
}
const Agent = ({ userName }: AgentProps) => {
    const isSpeaking = true;
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);


    const handleCall = () => {

    }

    const handleDisconnect = () => {
        
    }

    const messages = [
        'Hi', 'What is your name?', 'How are you doing today?',
    ];

    const lastmessage = messages[messages.length - 1];

    return (
        <>
            <div className='call-view'>
                <div className='card-interviewer'>
                    <div className='avatar'>
                        <Image src="/ai-avatar.png" alt='vapi'
                            width={65} height={54} className='object-cover' />
                        {isSpeaking && <span className='animate-speak' />}
                    </div>
                    <h3>AI Interviewer</h3>
                </div>
                <div className='card-border'>
                    <div className='card-content'>
                        <Image src="/avatar.svg" alt='user'
                            width={115} height={104} className='rounded-full object-cover size-[120px]' />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>
            {
                messages.length > 0 && (
                    <div className='transcript-border'>
                        <div className='transcript'>
                            <p key={lastmessage} className={cn('transition-opacity duration-500 opacity-0', 'animate-fadeIn opacity-100')}>
                                {lastmessage}
                            </p>
                        </div>
                    </div>
                )
            }
            <div className="w-full flex justify-center">
                {callStatus !== "ACTIVE" ? (
                    <button className="relative btn-call" onClick={() => handleCall()}>
                        <span
                            className={cn(
                                "absolute animate-ping rounded-full opacity-75",
                                callStatus !== "CONNECTING" && "hidden"
                            )}
                        />

                        <span className="relative">
                            {callStatus === "INACTIVE" || callStatus === "FINISHED"
                                ? "Call"
                                : ". . ."}
                        </span>
                    </button>
                ) : (
                    <button className="btn-disconnect" onClick={() => handleDisconnect()}>
                        End
                    </button>
                )}
            </div>
        </>
    )
}

export default Agent