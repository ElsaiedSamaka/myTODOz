import Head from "next/head";
import Script from "next/script";
import { useContext, useEffect } from "react";
import AppTitle from "../components/AppTitle";
import CreateTODO from "../components/CreateTODO";
import FilterBar from "../components/FilterBar";
import TodoList from "../components/TodoList";
import { LOCAL_STORAGE_KEY } from "../context/Constants";
import { GlobalContext, GlobalProvider } from "../context/GlobalState";
import "../styles/Home.module.css";
export default function Home() {
  const { todos} = useContext(GlobalContext)
  useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])
  
  return (
    <GlobalProvider>
        <Head>
          <title>Create Next App</title>
          <meta name='description' content='Generated by create next app' />
          {/* <script type="text/javascript" src="/static/util.js"></script> */}
        <link rel='icon' href='/favicon.ico' />
        <Script
            src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'
            integrity='sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM'
            crossOrigin='anonymous'
          />
        </Head>

        <body>
          <div className='container m-5 p-2 rounded mx-auto bg-light shadow'>
            {/* <!-- App title section --> */}
            <AppTitle />
            {/* <!-- Create todo section --> */}
            <CreateTODO />
            <div className='p-2 mx-4 border-black-25 border-bottom'></div>

            {/* <!-- View options section --> */}
            <FilterBar />
            {/* <!-- Todo list section --> */}
            <TodoList />
          </div>
          
        </body>
    </GlobalProvider>
  );
}
