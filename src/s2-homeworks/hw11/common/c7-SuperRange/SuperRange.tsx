import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: 'primary.main',
                height: 3,
                padding: '13px 0',
                '& .MuiSlider-thumb': {
                    height: 27,
                    width: 27,
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                    },
                },
                '& .MuiSlider-track': {
                    height: 3,
                },
                '& .MuiSlider-rail': {
                    height: 3,
                    opacity: 0.5,
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
