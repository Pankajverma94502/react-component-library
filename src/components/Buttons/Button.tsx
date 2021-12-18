// @ts-ignore
import React from 'react'
import {Button as MuiButton} from '@mui/material'
interface ButtonProps {
    label: string
}

const Button = (props: ButtonProps) => {
    return <MuiButton>{props.label}</MuiButton>
}

export default Button