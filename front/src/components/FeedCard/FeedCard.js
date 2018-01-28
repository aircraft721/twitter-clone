import React from 'react';
import styled from 'styled-components/native';

import FeedCardHeader from './FeedCardHeader';
import FeedCardBottom from './FeedCardBottom';

const Root = styled.View`
    minHeight: 100;
    backgroundColor: ${props => props.theme.WHITE};
    width: 100%;
    shadowColor: ${props => props.theme.SECONDARY};
    shadowOffset: 0px 2px;
    shadowRadius: 2;
    shadowOpacity: 0.1;
`;

const CardContentContainer = styled.View`
    height: auto;
    justifyContent: center;
    alignItems: center;
    padding: 10px 20px 10px 5px;
`;

const CardContentText = styled.Text`
    fontSize: 14;
    textAlign: left;
    fontWeight: 500;
    color: ${props => props.theme.SECONDARY};
`;

const text = 'lorem ipsumd asdas dasd sa dasdas fa asgfas dgdsgsdgsdag agads gahh alorem ipsumd as dasd sa dasdas fa asgfas dgdsgsdgsdag agads gahh alorem ipsumd';

const FeedCard = () => {
    return (
        <Root>
            <FeedCardHeader />
            <CardContentContainer>
                <CardContentText>
                    {text}
                </CardContentText>
            </CardContentContainer>
            <FeedCardBottom />
        </Root>
    );
}

export default FeedCard;