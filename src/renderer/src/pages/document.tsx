import { Editor } from '../components/Editor'
import { ToC } from '../components/ToC'

export const Document = () => {
  return (
    <main className='flex flex-1 gap-8 px-10 py-12 '>
      <aside className='sticky top-0 hidden lg:block'>
        <span className='text-rotion-300 text-xs font-semibold'>
          TABLE OF CONTENTS
        </span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>
            <ToC.Link>Banco de dados</ToC.Link>
            <ToC.Link>Autenticação</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className='flex flex-1 flex-col items-center'>
        <Editor />
      </section>
    </main>
  )
}
