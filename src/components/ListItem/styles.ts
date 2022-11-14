import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
};

export const Container = styled.div(({done }: ContainerProps)=>(
    `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    margin: auto;
    padding:10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 100px;
    }

    label {
        color: #fff;
        text-decoration: ${done ? 'line-through': 'initial'};

    }
`
));