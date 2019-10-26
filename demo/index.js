/* @flow */
import React from 'react'
import ReactDom from 'react-dom'
import MyComponent from '../src/index'

const appElement = document.getElementById('app')

appElement &&
  ReactDom.render(
    <div>
      You opened this page <MyComponent />
    </div>,
    appElement,
  )
