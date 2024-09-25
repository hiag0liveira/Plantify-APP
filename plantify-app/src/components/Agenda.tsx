import { useState, useEffect } from 'react'
import { format, addDays, startOfWeek } from 'date-fns'
import noAnnotation from '../assets/manage/noAnnotation.svg'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'

const loadNotes = (): { [key: string]: string[] } => {
	const storedNotes = localStorage.getItem('notes')
	return storedNotes ? JSON.parse(storedNotes) : {}
}

const saveNotes = (notes: { [key: string]: string[] }) => {
	localStorage.setItem('notes', JSON.stringify(notes))
}

const Agenda = () => {
	const [days, setDays] = useState<Date[]>([])
	const [notes, setNotes] = useState<{ [key: string]: string[] }>(loadNotes())
	const [newNotes, setNewNotes] = useState<{ [key: string]: string }>({})
	const [isAddingNote, setIsAddingNote] = useState<{ [key: string]: boolean }>(
		{}
	)
	const [hoveredNote, setHoveredNote] = useState<string | null>(null)
	const [editingNote, setEditingNote] = useState<{
		dayKey: string
		noteIndex: number | null
	}>({ dayKey: '', noteIndex: null })
	const [editNoteContent, setEditNoteContent] = useState<string>('')

	useEffect(() => {
		const today = new Date()
		const start = startOfWeek(today, { weekStartsOn: 0 })
		const daysArray: Date[] = []

		for (let i = 0; i < 7; i++) {
			daysArray.push(addDays(start, i))
		}

		setDays(daysArray)
	}, [])

	const addNote = (day: Date) => {
		const dayKey = format(day, 'yyyy-MM-dd')
		const updatedNotes = {
			...notes,
			[dayKey]: [...(notes[dayKey] || []), newNotes[dayKey] || ''],
		}
		setNotes(updatedNotes)
		saveNotes(updatedNotes)
		setNewNotes({ ...newNotes, [dayKey]: '' })
		setIsAddingNote({ ...isAddingNote, [dayKey]: false })
	}

	const handleNoteChange = (dayKey: string, note: string) => {
		setNewNotes({
			...newNotes,
			[dayKey]: note,
		})
	}

	const showInputField = (dayKey: string) => {
		setIsAddingNote({
			...isAddingNote,
			[dayKey]: true,
		})
	}

	const deleteNote = (dayKey: string, noteIndex: number) => {
		const updatedNotes = {
			...notes,
			[dayKey]: notes[dayKey].filter((_, index) => index !== noteIndex),
		}
		setNotes(updatedNotes)
		saveNotes(updatedNotes)
	}

	const startEditing = (dayKey: string, noteIndex: number) => {
		setEditingNote({ dayKey, noteIndex })
		setEditNoteContent(notes[dayKey][noteIndex])
	}

	const saveEditedNote = (dayKey: string, noteIndex: number | null) => {
		if (noteIndex !== null) {
			const updatedNotes = {
				...notes,
				[dayKey]: notes[dayKey].map((note, index) =>
					index === noteIndex ? editNoteContent : note
				),
			}
			setNotes(updatedNotes)
			saveNotes(updatedNotes)
			setEditingNote({ dayKey: '', noteIndex: null })
		}
	}

	return (
		<div className="grid grid-cols-7 gap-4 p-4">
			{days.map((day: Date, index: number) => {
				const dayKey = format(day, 'yyyy-MM-dd')
				return (
					<div
						key={dayKey}
						className={`p-4 text-center ${
							index !== 0 ? 'border-l border-gray-100' : ''
						}`}
					>
						<div className="text-7xl font-medium text-greenFigman">
							{format(day, 'dd')}
						</div>

						<div className="mt-2">
							{notes[dayKey]?.length ? (
								notes[dayKey].map((note: string, noteIndex: number) => (
									<div
										key={`${dayKey}-${noteIndex}`}
										className={`relative text-sm border rounded-md border-purple-300 mb-2 text-purple-500 transition-transform duration-300 ${
											hoveredNote === `${dayKey}-${noteIndex}`
												? 'translate-y-[-3px]'
												: ''
										}`}
										onMouseEnter={() =>
											setHoveredNote(`${dayKey}-${noteIndex}`)
										}
										onMouseLeave={() => setHoveredNote(null)}
									>
										{editingNote.dayKey === dayKey &&
										editingNote.noteIndex === noteIndex ? (
											<div className="flex flex-col">
												<input
													type="text"
													value={editNoteContent}
													onChange={(e) => setEditNoteContent(e.target.value)}
													className="border p-1"
												/>
												<button
													onClick={() => saveEditedNote(dayKey, noteIndex)}
													className="text-blue-500 hover:underline mt-2"
												>
													Salvar Edição
												</button>
											</div>
										) : (
											<>
												<div>{note}</div>

												{hoveredNote === `${dayKey}-${noteIndex}` && (
													<div className="flex justify-center gap-2 mt-2">
														<button
															className="text-blue-500 hover:underline flex items-center"
															onClick={() => startEditing(dayKey, noteIndex)}
														>
															<FaRegEdit size={20} />
														</button>
														<button
															className="text-red-500 hover:underline flex items-center"
															onClick={() => deleteNote(dayKey, noteIndex)}
														>
															<MdOutlineDeleteForever size={20} />
														</button>
													</div>
												)}
											</>
										)}
									</div>
								))
							) : (
								<div className="flex justify-center items-center h-20">
									<img src={noAnnotation} alt="Sem Anotações" />
								</div>
							)}

							{!isAddingNote[dayKey] && (
								<button
									onClick={() => showInputField(dayKey)}
									className="mt-2 font-roboto text-gray-400 hover:underline"
								>
									+ Adicionar Nota
								</button>
							)}

							{isAddingNote[dayKey] && (
								<>
									<input
										type="text"
										value={newNotes[dayKey] || ''}
										onChange={(e) => handleNoteChange(dayKey, e.target.value)}
										placeholder="Digite sua nota..."
										className="mt-2 text-sm border rounded-md text-purple-500 border-purple-500 p-1 w-full"
									/>
									<button
										onClick={() => addNote(day)}
										className="mt-2 text-gray-500 hover:underline"
									>
										Salvar Nota
									</button>
								</>
							)}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Agenda
