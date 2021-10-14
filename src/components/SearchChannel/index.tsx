import { ReactNode } from "react";

interface ISearchChannel{
  title: string
  domain?: string,
  children?: ReactNode
}

export default function SearchChannel({title, domain, children}:ISearchChannel){
  return (
    <>
    <div className="channel">
      <a href="#" className="channel__title">{title}</a>
      <div className="channel__domain">
        <span className="channel__domain-title">{domain ? domain : 'https://site.com/'}</span>
        <span className="channel__domain-arrow"></span>
        </div>
      <div className="channel__description">{children}</div>
    </div>
    <style jsx>{`
      .channel {
        max-width: 600px
      }

      .channel__title {
        display: block;
        letter-spacing: normal;
        color: #1a0dab;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 18px;
        line-height: 2;
      }
      
      .channel__title:first-letter {
        text-transform: uppercase;
      }

      .channel__title:hover {
        text-decoration: underline
      }

      .channel__domain {
        display: flex;
      }

      .channel__domain-title {
        position: relative;
        top: -2px;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: normal;
        color: #006621;
      }

      .channel__domain-arrow {
        display: inline-block;
        vertical-align: middle;
        margin-top: 4px;
        margin-left: 3px;
        border-width: 5px 4px 0 4px;
        border-style: solid;
        border-color: #006621 transparent;
      }

      .channel__description {
        color: #545454;
        font-size: 13px;
        line-height: 1.4;
        word-wrap: break-word;
      }

      .channel__description:first-letter {
        text-transform: uppercase;
      }
    `}</style>
    </>
    
  )
}