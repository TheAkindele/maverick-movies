import React from 'react'
import { Spinner } from 'react-bootstrap'
import { SpinnerStyle, PreLoaderStyle } from './loaderStyle'

export const PreLoader = () => {
    return (
        <PreLoaderStyle>
            <div className="preloader-wrapper small active">
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </PreLoaderStyle>
    )
}

export const Loader = () => {
    return (
        <SpinnerStyle>
            <Spinner animation="border" role="status">
                <h3 className="sr-only">Loading...</h3>
            </Spinner>
        </SpinnerStyle>
    )
}
