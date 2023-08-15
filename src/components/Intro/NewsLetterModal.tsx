import * as Dialog from '@radix-ui/react-dialog'
import { XCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'

const NewsLetterFormSchema = z.object({
  name: z.string().min(3, { message: 'Insira um nome valido' }),
  email: z.string().min(3, { message: 'Insira um e-mail valido' }).email(),
})

type NewsLetterFormData = z.infer<typeof NewsLetterFormSchema>

export function NewsLetterModal() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsLetterFormData>({
    resolver: zodResolver(NewsLetterFormSchema),
  })

  async function handleNewsLetterFormData(data: NewsLetterFormData) {
    try {
      await api.post('/news-letter-form', {
        name: data.name,
        email: data.email,
      })
      reset()
      alert('🔔 Obrigado por assinar nossa Newsletter! 🔔')
    } catch (err) {
      alert('🔔 Falha ao assinar. Tente novamente. 🔔')
      console.log(err)
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-overlay absolute top-0 left-0 z-40 h-full w-full" />

      <Dialog.Content className="bg-white fixed z-40 top-20 left-[calc(w-screen - 10%)] flex flex-col gap-10 justify-center h-4/5 pt-12 rounded-md px-6 mx-2 md:w-2/5 md:left-[30%] lg:left-[30%] lg:h-3/5">
        <form onSubmit={handleSubmit(handleNewsLetterFormData)}>
          <div>
            <h2 className="text-xl font-bold md:text-4xl ">
              Assine nossa NewsLetter
            </h2>
            <p className="text-sm md:text-lg mb-4">
              e fique antenado as novidades semanais sobre &quot;Você viu
              Ágata?&quot;
            </p>
          </div>

          <div>
            <label htmlFor="" className="text-sm">
              SEU NOME
            </label>
            <input
              type="text"
              placeholder="Digite seu nome..."
              className="w-full border border-black text-xs py-3 px-2 focus:outline-none focus:ring focus:ring-red-400"
              {...register('name')}
            />
            <span className="text-xs text-red-500">{errors.name?.message}</span>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="text-sm">
              SEU E-MAIL
            </label>
            <input
              type="text"
              placeholder="Digite seu nome..."
              className="w-full border border-black text-xs py-3 px-2 focus:outline-none focus:ring focus:ring-red-400"
              {...register('email')}
            />
            <span className="text-xs text-red-500">
              {errors.email?.message}
            </span>
          </div>

          <button
            disabled={isSubmitting}
            className="bg-red-500 py-3 text-white w-full mt-4"
          >
            ASSINAR
          </button>
        </form>

        <Dialog.Close asChild className="absolute top-4 right-4 ">
          <button disabled={isSubmitting}>
            <XCircle className="text-black hover:text-red-400" />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
