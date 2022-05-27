import { ReactLogo } from '../Logos/ReactLogo.jsx'
import { ExpressLogo } from '../Logos/ExpressLogo.jsx'
import { FigmaLogo } from '../Logos/FigmaLogo.jsx'
import { GitLogo } from '../Logos/GitLogo.jsx'
import { LaravelLogo } from '../Logos/LaravelLogo.jsx'
import { MariaDBLogo } from '../Logos/MariaDBLogo.jsx'
import { MongoDBLogo } from '../Logos/MongoDBLogo.jsx'
import { MySQLLogo } from '../Logos/MysqlLogo.jsx'
import { NextLogo } from '../Logos/NextLogo.jsx'
import { NpmLogo } from '../Logos/NpmLogo.jsx'
import { PhpLogo } from '../Logos/PhpLogo.jsx'
import { TailwindLogo } from '../Logos/TailwindLogo.jsx'
import { HTMLLogo } from '../Logos/HTMLLogo.jsx'
import { CSSLogo } from '../Logos/CSSLogo.jsx'
import { JavaScriptLogo } from '../Logos/JavaScriptLogo.jsx'
import { GitHubLogo } from '../Logos/GitHubLogo.jsx'

const style = 'h-8 md:h-10 lg:h-10 w-auto fill-slate-200'

export const TechnologiesList = () => {
  return (
    <div className="flex flex-wrap max-w-md w-full gap-6 m-auto">
      <HTMLLogo className={style} background='fill-slate-900' />
      <CSSLogo className={style} background='fill-slate-900' />
      <JavaScriptLogo className={style} background='fill-slate-900' />
      <ReactLogo className={style} />
      <NextLogo className={style} />
      <ExpressLogo className={style} />
      <GitHubLogo className={style}/>
      <GitLogo className={style} />
      <NpmLogo className={style} />
      <LaravelLogo className={style} />
      <PhpLogo className={style} />
      <TailwindLogo className={style} />
      <MySQLLogo className={style} />
      <MariaDBLogo className={style} />
      <MongoDBLogo className={style} />
      <FigmaLogo className={style} />
    </div>
  )
}
