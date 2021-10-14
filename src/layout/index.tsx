import { ReactNode } from 'react';
import 'semantic-ui-css/semantic.min.css';

interface IChildren {
  children: ReactNode;
}

export default function Layout({children}: IChildren) {
  return (
    <>
    <div className="wrapper layout">
      {children}
    </div>
    <style jsx>{`
      .wrapper {
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between
      }
    `}</style>
    </>
  )
}