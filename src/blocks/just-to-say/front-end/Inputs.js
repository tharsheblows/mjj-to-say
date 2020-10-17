import React from 'react'
import DOMPurify from 'dompurify';
// import sanitizeHtml from 'sanitize-html'

function Inputs(props) {
  const { inputFields, inputs, divId } = props
  // Used for sanitizing input fields. No tags allowed.
  	const sanitizeHtml = DOMPurify.sanitize
  const allowedInputTags = []
  let count = 0
  const inputReturn =
    inputFields.length > 0
      ? inputFields.map(i => {
		  const id = `input-${count++}`
		  const inputValue = ( inputs.length < count ) ? '' : inputs[count-1]
          const input = `<div class="lib-inputs"><label for="${id}">${sanitizeHtml(
            i.description,
            allowedInputTags
          )}</label> <input type="text" name="${id}-${divId}" id="${id}-${divId}" value="${sanitizeHtml(
            inputValue,
            allowedInputTags
          )}"/></div>`
          return input
        }, [])
      : ['no fields yet']

  const returnedInputsHtml = { __html: inputReturn.join('') }

  return (
    <div
      id={divId}
      className="mjj-just-to-say-inputs"
      dangerouslySetInnerHTML={returnedInputsHtml}
    />
  )
}

export default Inputs
