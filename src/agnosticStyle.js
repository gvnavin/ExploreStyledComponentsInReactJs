import React from 'react'
import styled from 'styled-components'

export default styled(
    ({tag = 'div', children, ...props}) => {
            // console.log("children : " + JSON.stringify(children))
            console.log("props : " + JSON.stringify(props))
            return React.createElement(tag, props, children)
    }
)
