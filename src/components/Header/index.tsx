import Parser from '../Parser';

export default function Header() {
  return(
    <>
      <header className="header-block">
        <div className="header__inner">
          <div className="ui menu">
            <div className="ui container">
              <a href="/" className="header item">
                Tag Name
              </a>
              <a href="/" className="item">Home</a>
              <a href="/faq" className="item">FAQs</a>
              <a href="#" className="item">Contact</a>
            </div>
          </div>
          <Parser url="domain.ru" name="frontend" />
        </div>
      </header>
      <style jsx>{`
        .header-block {
          min-height: auto
        }
      `}</style>
    </>
  )
}