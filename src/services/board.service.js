import { BoardModel } from '*/models/board.model'
import { cloneDeep } from 'lodash'

const createNew = async (data) => {
  try {
    const result = await BoardModel.createNew(data)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const getFullBoard = async (boardId) => {
  try {
    const board = await BoardModel.getFullBoard(boardId)

    if (!board || !board.columns) {
      throw new Error('board not found')
    }

    const transfromBoard = cloneDeep(board)
    //filter deleted columns
    transfromBoard.columns = transfromBoard.columns.filter(column => !column._destroy)

    //Add card to each column.
    transfromBoard.columns.forEach(column => {
      column.cards = transfromBoard.cards.filter(c => c.columnId.toString() === column._id.toString())
    })

    //sort columns by columnOrder, sort cards by cardOrder, this step will pass to FrontEnd.


    //Remove cards data from boards
    delete transfromBoard.cards

    //
    return transfromBoard
  } catch (error) {
    throw new Error(error)
  }
}

const update = async (id, data) => {
  try {
    const updateData = {
      ...data,
      updatedAt: Date.now()
    }
    if (updateData._id) delete updateData._id
    if (updateData.columns) delete updateData.columns

    const updatedBoard = await BoardModel.update(id, updateData)

    return updatedBoard
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }
}

export const BoardService = { createNew, getFullBoard, update }