import React, { Component } from 'react';
import styled from 'styled-components/native';
import { SimpleLineIcons } from '@expo/vector-icons';
 
const Root = styled.View`
    height: 40;
    flexDirection: row;
`;  

const Button = styled.View`
    flex: 1;
`;

const ButtonText = styled.Text`
    fontSize: 14;
    fontWeight: 500;
    color: ${props => props.theme.LIGHT_GRAY};
`;

const FeedCardBottom = () => {
    return (
        <Root>
            <Button>
                <SimpleLineIcons name='bubble'/>
                <ButtonText>
                    3
                </ButtonText>
            </Button>
            <Button>
                <ButtonText>
                    3
                </ButtonText>
            </Button>
            <Button>
                <ButtonText>
                    3
                </ButtonText>
            </Button>
        </Root>
    );
}

export default FeedCardBottom;