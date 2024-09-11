'use client';

import { useRouter } from "next/navigation";

export const CloseModalButtom = () => {
    const router = useRouter();

    const onDismiss = () => {
        router.back();
      }
    return (
        <button onClick={onDismiss}>Close</button>
    )
}