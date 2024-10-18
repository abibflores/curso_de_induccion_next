'use client'
import React from 'react';
import { sendGTMEvent } from '@next/third-parties/google'

export const ButtonGoogleTagManager = ({ children, className, value }: { children: React.ReactNode, className: any, value: string }) => {
  return (
    <button onClick={() => sendGTMEvent({ event: 'cart_preview_click', value})} className={className}>{children}</button>
  )
}