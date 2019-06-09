import React, { useRef } from 'react'
import s from './HomePage.module.css'
export const HomePage = () => {
  return (
    <div className={s.main}>
      <div className={s.section}>
        Простая, интуитивно понятная и надежная система обмена данными о
        студентах с работодателями в обе стороны
      </div>
      <div className={s.section}>
        Схема обработки информации (поиска закономерностей) для внесения
        конструктивных изменений в образовательные процессы
      </div>
    </div>
  )
}
