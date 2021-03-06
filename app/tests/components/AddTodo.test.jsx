var expect = require( 'expect' );
var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var TestUtils = require( 'react-addons-test-utils' );
var $ = require( 'jquery' );

var { AddTodo } = require( 'AddTodo' );

import * as actions from 'actions';

describe( 'AddTodo', () => {
    it( 'should exist', () => {
        expect( AddTodo ).toExist();
    });

    it( 'should dispatch ADD_TODO when valid todo text', () => {
        var todoText = 'Play the guitar';
        var action = actions.startAddTodo( todoText );
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(
            <AddTodo dispatch={spy}/> );
        var $el = $( ReactDOM.findDOMNode( addTodo ));
        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit( $el.find( 'form' )[0] );
        expect( spy ).toHaveBeenCalledWith( action );
    });

    it( 'should not dispatch ADD_TODO if blank string entered', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(
            <AddTodo dispatch={spy}/> );
        var $el = $( ReactDOM.findDOMNode( addTodo ));
        addTodo.refs.todoText.value = '   ';
        TestUtils.Simulate.submit( $el.find( 'form' )[0] );
        expect( spy ).toNotHaveBeenCalled();
    });
});