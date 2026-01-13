FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio: 150 / 100,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150
})

FilePond.parse(document.body); 


/*console.log('fileUpload.js loaded');

FilePond.registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginFileEncode
)

const pond = FilePond.create(
  document.querySelector('input[type="file"]')
)

document.getElementById('bookForm').addEventListener('submit', async (e) => {
  e.preventDefault()

  const form = e.target
  const file = pond.getFiles()[0]

  const body = {
    title: form.title.value,
    author: form.author.value,
    publishDate: form.publishDate.value,
    pageCount: form.pageCount.value,
    description: form.description.value,
    cover: file ? file.getFileEncodeBase64String() : null
  }

  const res = await fetch('/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  if (res.ok) {
    window.location.href = '/books'
  } else {
    alert('Error creating book')
  }
})
*/