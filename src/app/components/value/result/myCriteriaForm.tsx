'use client'

import React, {useState} from 'react'
import SubmitButton from '@/app/components/common/submitButton'
import { createPost } from '@/app/lib/action'
import { Post, Criterion } from '@/app/lib/definition'

export default function MyCriteriaForm({ criteria }: { criteria: string[] }) {
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        event.currentTarget.submitButton.disabled = true
        const formData = new FormData(event.currentTarget)
        const username = formData.get('username') as string
        if (!username) {
            event.currentTarget.submitButton.disabled = false
            setErrorMessage('表示名を入力してください')
            return
        }
        
        const post:Post = {
            username: username,
            criteria: criteria.map((c) => ({ content: c } as Criterion))
        }

        try {
            const result = await createPost(post)
            if (result) {
                setSuccessMessage('投稿しました')

            }
        } catch (error) {
            console.error(error)
            setErrorMessage('投稿に失敗しました')
            event.currentTarget.submitButton.disabled = false
            return
        }

    }
  return (
    <form onSubmit={handleSubmit} className='border-y-2 my-5 py-5 '>
        <p>あなたの企業選びの軸を投稿することができます</p>
        {errorMessage && <p id='error' className='text-red-500'>{errorMessage}</p>}
        <div className='mt-2'>
        <label htmlFor="username">表示名：</label>

        <input type="text" name='username' className='border-2 w-3/4'/>
        </div>
        <div>
            <SubmitButton />
        </div>
        <div>
            {successMessage && <p className='text-green-500 mt-5 text-center'>{successMessage}</p>}
        </div>
    </form>
  )
}
