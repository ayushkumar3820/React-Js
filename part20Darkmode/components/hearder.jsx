import React, {useState} from 'react';
export default function Header({theme}){
    const [isDark,SetIsDark]=theme
    // if(isDark){
    //     document.body.classList.add('dark')
    // }
    // else{
    //     document.body.classList.remove('dark');
    // }
    return (
        <header className={`header-container ${isDark? 'dark':''}`}>
            <div className="header-content">
                <h2 className="title">
                    <a href="/">where in the world </a>
                </h2>
                <p className="theme-changer" onClick={()=>{
                    SetIsDark(!isDark)
                    localStorage.setItem('isDarkMode',!isDark);
                }}>
                    <i className={`fa-solid fa-${isDark ? 'sun': 'moon'}` }/>
                    &nbsp;&nbsp;{isDark? 'Light': 'Dark'} Mode
                   
                </p>
            </div>
        </header>
    )
 }