import style from "./page.module.css";

export default function Home(){
  return(
    <main className={style.body}>
    <h1 className={style.h1}>Hello Word!!!</h1>
    <p className={style.p}>Minha Primeira Página Next</p>
    </main>
  );
}