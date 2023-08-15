'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'

const JoinUsFormSchema = z.object({
  name: z.string().min(3, { message: 'Insira um nome valido.' }),
  email: z.string().min(3, { message: 'Insira um e-mail valido.' }).email(),
  message: z.string().min(3, { message: 'Insira uma mensagem valida.' }),
})

type JoinUsFormData = z.infer<typeof JoinUsFormSchema>

export function JoinUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<JoinUsFormData>({
    resolver: zodResolver(JoinUsFormSchema),
  })

  async function handleSubmitJoinUsForm(data: JoinUsFormData) {
    try {
      await api.post('/contact-form', {
        name: data.name,
        email: data.email,
        message: data.message,
      })
      reset()
      alert('🔔 E-mail enviado com sucesso! 🔔')
      console.log('🔔 E-mail enviado com sucesso! 🔔')
    } catch (err) {
      alert('🔔 Falha ao enviar o e-mail. Tente novamente. 🔔')
      console.log('🔔 Falha ao enviar o e-mail. Tente novamente. 🔔')
    }
  }

  return (
    <div
      id="join-us"
      className="bg-black py-20 flex flex-col items-center text-center gap-2 px-2"
    >
      <h2 className="text-red-500 sm:text-4xl">
        DEIXE SUA MARCA NA HISTÓRIA DE ÁGATA
      </h2>
      <p className="text-white mb-12">
        PREENCHA OS CAMPOS ABAIXO E DEIXE SUA MENSAGEM ETERNIZADA NA CAIXA DE
        ENTRADA DO E-MAIL DE ÁGATA.
      </p>

      <form
        className="text-start flex flex-col gap-4 w-full px-4 max-w-4xl"
        onSubmit={handleSubmit(handleSubmitJoinUsForm)}
      >
        <label htmlFor="" className="text-white text-sm">
          SEU NOME
        </label>
        <input
          type="text"
          className="bg-black border border-white w-full p-2 text-white text-sm focus:outline-none focus:ring focus:ring-red-400"
          placeholder="Digite seu nome aqui..."
          {...register('name')}
        />
        <span className="text-xs text-red-500">{errors.name?.message}</span>

        <label htmlFor="" className="text-white text-sm">
          SEU E-MAIL
        </label>
        <input
          type="text"
          className="bg-black border border-white w-full p-2 text-white text-sm focus:outline-none focus:ring focus:ring-red-400"
          placeholder="Digite seu nome aqui..."
          {...register('email')}
        />
        <span className="text-xs text-red-500">{errors.email?.message}</span>

        <label htmlFor="" className="text-white text-sm">
          SUA MENSAGEM ETERNIZADA
        </label>
        <textarea
          className="bg-black border border-white w-full p-2 text-white text-sm focus:outline-none focus:ring focus:ring-red-400"
          placeholder="Digite seu nome aqui..."
          {...register('message')}
        />
        <span className="text-xs text-red-500">{errors.message?.message}</span>

        <button
          type="submit"
          className="bg-red-500 w-full p-4 text-xl text-white focus:outline-none focus:ring focus:ring-white hover:opacity-80 transition-all"
          disabled={isSubmitting}
        >
          ENVIAR
        </button>
      </form>
    </div>
  )
}
