import React, { useEffect,useState } from 'react'
import * as questionActions from '../../store/questions'
import { useDispatch } from 'react-redux'
import './styles.css'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

const renderers = {
    code: ({language, value}) => {
      return <SyntaxHighlighter style={atomDark} language={language} children={value} />
    }
  }


const MainPage = () => {
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    const [isLoaded, setIsLoaded] = useState(true)
    const [contentTwo, setContentTwo] = useState('')

    useEffect(() => {
       
        // (async () => {
        //     let thiss = dispatch(questionActions.getQuestions())
        //     let res = await 
        // })())
      
        (async () => {
            const data = await dispatch(questionActions.getQuestions())
            const keyed = data.Questions[0].answer
            setContent(keyed)
            // setIsLoaded(true)
           let thiss = keyed.split('/n')
            setContentTwo(thiss)
         })();

    },[dispatch])
    
    let trial = `${content}`
   

    return (
        <>
  
            
            <ReactMarkdown renderers={renderers} allowDangerousHtml={true} source={content} plugins={[gfm]}  >
            {contentTwo}
            </ReactMarkdown>
            {contentTwo && contentTwo.map((line) => (
                <ReactMarkdown className='md' children={line}>{line}</ReactMarkdown>
            ))}
        </>
    )
}

export default MainPage