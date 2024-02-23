import React from 'react'
import Breadcrumb from './Breadcrumb'
import MainContent from './MainContent'

function CategoriesPage({data}:any) {
  return (
    <div>
        <MainContent data={data}/>
    </div>
  )
}

export default CategoriesPage