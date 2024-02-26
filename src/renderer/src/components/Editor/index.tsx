import Document from '@tiptap/extension-document'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import Typography from '@tiptap/extension-typography'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export const Editor = () => {
  const editor = useEditor({
    extensions: [
      Document.extend({
        // starts with heading then any block (block is any element)
        content: 'heading block*',
      }),
      StarterKit.configure({
        document: false,
      }),
      Highlight,
      Typography,
      Placeholder.configure({
        placeholder: 'Sem título',
        emptyEditorClass:
          'before:content-[attr(data-placeholder)] before:text-gray-500 before:h-0 before:float-left before:pointer-events-none',
      }),
    ],
    autofocus: 'end',
    editorProps: {
      attributes: {
        class:
          'focus:outline-none prose prose-invert prose-headings:mt-0 max-w-none',
      },
    },
    content:
      '<h1>Back-end</h1><p>Esse é um documento que explica sobre back-end.</p>',
  })

  return <EditorContent className='w-[65ch]' editor={editor} />
}
