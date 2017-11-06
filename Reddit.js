import React from 'react';
import {connect} from 'react-redux'; 
import {ADD_POST} from './reducers'

import {
    View, 
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

const _Reddit = (props) => (
    <View>
        {props.posts.map(posts => 
            <Text>{post.name}</Text>
        )}
    </View>
)

const mapStateToProps = (state) => ({
    posts: state.reddit
})

const mapActionsToProps = (dispatch) => ({
    addRedditPosts(post={name: 'new post'}) {
        dispatch({type: ADD_POST, payload: post})
    }
})

export const Reddit = connect(mapStateToProps, null)(_Reddit)