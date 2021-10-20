import type { NextPage } from 'next'

import Layout from '../layout';
import Header from '../components/Header'
import Footer from '../components/Footer';
import TitleChannel from '../components/TitleChannel';
import SearchChannel from '../components/SearchChannel';


const Home: NextPage = () => {
  return (
    <>

      <div className="ui one column stackable grid">
        
        <section className="column">
          <div className="ui basic segment">
            <TitleChannel channel="Google" icon='/favicon-google.png' />
            <SearchChannel domain='google.com' title="Meta Tags — Preview, Edit and Generate">
              Learn about Next.js in an interactive course with quizzes! Instantly deploy your Next.js site to a public URL with Vercel.
            </SearchChannel>
          </div>
        </section>

        <section className="column">
          <div className="ui basic segment">
            <TitleChannel channel="Yandex" icon='/favicon-yandex.png' />
            <SearchChannel domain="yandex.ru" title="как добавить виджеты в яндексе на главной странице">
            Для того, чтобы добавить виджет на главную страницу Яндекса, необходимо сначала перейти в каталог виджетов здесь. Наведя мышкой на картинку с логотипом виджета, появится кнопка "Добавить", нажав по которой откроется главная страница Яндекса с предложением сохранения выбранного виджета или отмены.
            </SearchChannel>
          </div>
        </section>

      </div>
    
    </>
  )
}

export default Home
