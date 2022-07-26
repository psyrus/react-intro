import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function MoveSorter(props) {
  return (
  <button className='' onClick={props.onClick}>
    {props.text}
  </button>
  );
}

function Square(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        className = {this.props.winningSquares && this.props.winningSquares.includes(i) ? 'square winner' : 'square'}
      />
    );
  }

  getBoardRow(startIndex) {
    let content = [];
    for (let index = startIndex; index < startIndex + 3; index++) {
      content.push(this.renderSquare(index));
    }
    return content;
  }


  render() {
    let content = [];
    for (let index = 0; index < 3; index++) {
      content.push(<div className='board-row' key={'row'+index}>{ this.getBoardRow(index * 3) }</div>);
    };
    return (
      <div>
        { content }
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          move: null
        }
      ],
      xIsNext: true,
      stepNumber: 0,
      sortMovesAsc: true
    }
  }


  getNextValue() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if(calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.getNextValue();
    this.setState({
      history: history.concat([{
        squares: squares,
        move: [Math.floor(i / 3), i % 3]
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  handleSortClick() {
    this.setState(
      {sortMovesAsc: !this.state.sortMovesAsc}
    );
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares)
    const sortBtnText = this.state.sortMovesAsc ? 'Ascending' : 'Descending'

    let moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move + " ("+history[move].move[0]+", "+history[move].move[1]+")" : 'Go to game start';
      let btnClass = move === this.state.stepNumber ? 'boldxxx' : 'normal';
      return(
        <li key={move}>
          <button onClick={() => this.jumpTo(move)} className={btnClass}>{desc}</button>
        </li>
      )
    });

    if (!this.state.sortMovesAsc) {
      moves = moves.reverse();
    }

    let status;
    if (winner) {
      if (winner === 'Draw') {
        status = 'Winner: No one! It was a draw';
      } else {
        status = 'Winner: ' + current.squares[winner[0]];
      }
    } else {
      status = 'Next player: ' + this.getNextValue();
    }
    return (
      <div className='game'>
        <div className='game-board'>
          <Board
            squares = {current.squares}
            onClick={(i) => this.handleClick(i)}
            winningSquares = {winner}
          />
        </div>
        <div className='game-info'>
          <div>{status}</div>
          <div>Sort Moves: <MoveSorter onClick={() => this.handleSortClick()} text={sortBtnText}/></div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [a, b, c];
    }
  }
  if (squares.includes(null)) {
    return null;
  } else {
    return 'Draw'
  }
}

// Still todo: https://reactjs.org/tutorial/tutorial.html#wrapping-up - Finished all except highlighting the winning squares and result being a draw