import React, { Component } from 'react';
import styled from 'styled-components/native';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Touchable from '@appandflow/touchable';

import { colors } from '../../utils/constants';

const ICON_SIZE = 20;

const Root = styled.View`
    height: 40;
    flexDirection: row;
`;  

const Button = styled(Touchable).attrs({
    feedback: 'opacity'
})`
    flex: 1;
    alignItems: center;
    alignItems: center;
    justifyContent: space-around;
    paddingHorizontal: 32px;s
`;

const ButtonText = styled.Text`
    fontSize: 14;
    fontWeight: 500;
    color: ${props => props.theme.LIGHT_GRAY};
`;

const favoriteCount = 3;
const isFavorited = false;


const FeedCardBottom = () => {
    return (
        <Root>
            <Button>
                <FontAwesome style={{fontSize: ICON_SIZE}}>{Icons.commentO}</FontAwesome>
                <ButtonText>
                    {favoriteCount}
                </ButtonText>
            </Button>
            <Button>
                <FontAwesome style={{fontSize: ICON_SIZE}}>{Icons.retweet}</FontAwesome>
                <ButtonText>
                    {favoriteCount}
                </ButtonText>
            </Button>
            <Button>
                <FontAwesome style={{fontSize: ICON_SIZE, color: isFavorited ? 'red' : colors.LIGHT_GRAY}}>{Icons.heart}</FontAwesome>
                <ButtonText>
                    {favoriteCount}
                </ButtonText>
            </Button>
        </Root>
    );
}

export default FeedCardBottom;