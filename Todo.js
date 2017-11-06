import React from 'react';
import {
    AppRegistry,
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    Platform
} from 'react-native';

export default class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: ''
        }
    }

    handleChange(text) {
        this.setState({newTodo: text});
    }

    handlePress(e) {
        if (!this.state.newTodo.length){
            return;
        }
        const newTodos = [this.state.newTodo, ...this.state.todos ];
        this.setState({todos: newTodos, newTodo: ''});
        this.setState({newTodo: ""});
    }

    render () {
        return (        
            <View>
                <View style = {styles.controlsContainer}>
                    <TextInput 
                        placeholder="New todo"
                        style = {styles.textInput} 
                        value={this.state.newTodo.toString()} 
                        onChangeText = {(text) => this.setState({newTodo: text})}
                    /> 
                    <TouchableOpacity style = {styles.addButton} onPress={this.handlePress.bind(this)}>
                        <Text style = {styles.addButtonText} >Tap me </Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.itemsList} >
                    {this.state.todos.map( (todo, i) => (
                    <Text key={i}>{todo}</Text>
                    ))}
                </View>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    todo:  {
        backgroundColor: '#00FB65',
        fontSize: 24
    },

    controlsContainer:  {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },

    textInput:  {
        flex: 0.7,
        borderWidth: 1,
        borderColor: 'green',
        marginRight: 16,
        height: 40
    },

    addButton:  {
        flex: 0.3,
        backgroundColor: 'orange',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 8,
        borderRadius: 10
    },

    addButtonText:  {
        color: 'white',
    },

    itemsList:  {
        marginTop: 16,
    },

});