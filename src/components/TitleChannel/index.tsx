
enum Channels {
  Google,
  Yandex,
  Facebook,
  Twitter,
}
interface ITitleChannel{
  channel: string,
  icon?: string
}

export default function TitleChannel({channel, icon}:ITitleChannel) {
  return (
    <>
    
      <div className="title-channel">
        <div className="title-channel__inner">
          <img className="title-channel__icon" src={icon} width="20" />
          <span className="title-channel__name">{channel}</span>
        </div>
      </div>

      <style jsx>{`
      
        .title-channel {
          position: relative;
          margin: 1em 0 1em;
        }
        
        .title-channel:first-letter {
          text-transform: uppercase;
        }
        
        .title-channel:before {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          width: 100%;
          height: 1px;
          background: #E0E7F1;
        }

        .title-channel__inner {
          position: relative;
          background: #FBFBFB;
          display: inline-flex;
          align-items: center;
        }
        
        .title-channel__icon {
          margin-right: 6px;
        }

        .title-channel span {
          position: relative;
          padding-right: 12px;
          font-size: 14px;
          letter-spacing: 0.015em;
          color: #A3B3CA;
        }

      `}</style>
    </>
  )
}