import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

export const Container = styled.div(props =>({
    'text-align': props.center && 'center',
    '@keyframes App-logo-spin': {
        'from': {
            'transform': 'rotate(0deg)',
        },
        'to': {
            'transform': 'rotate(360deg)',
        },
    },
}));
Container.propTypes={
    center: PropTypes.bool.isRequired,
}
Container.defaultProps={
    center: false,
}

export const Image = styled.img({
    'animation': 'App-logo-spin infinite 20s linear',
    height: '80px',
});

export const Header = styled.header({
    'background-color': '#222',
    'height': '150px',
    'padding': '20px',
    'color': 'white',
});

export const H1 = styled.h1({
    'font-size': '1.5em',
});

export const Text = styled.p({
    'font-size': 'large',
});