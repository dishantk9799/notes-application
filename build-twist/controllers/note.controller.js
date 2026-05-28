import { Note } from "../models/note.model.js";

// ---- Create note ----
export const createNote = async (req, res) => {
    try {
        // ---- User provided data ----
        const { title, description } = req.body;

        // ---- Validation ----
        if (!title) return res.status(400).json({ message: "title is required" });
        if (!description) return res.status(400).json({ message: "description is required" });
        if (title.trim().length < 3) return res.status(400).json({ message: "title should be more then 3 character" });
        if (description.trim().length < 10) return res.status(400).json({ message: "description should be more then 10 character" });

        // ---- Creating note ----
        const newNote = await Note.create({ title, description });

        return res.status(201).json({
            message: "Note created successfully",
            note: newNote
        });

    } catch (error) {
        console.log("Error in Create note:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

// ---- Read note ----
export const readNote = async (req, res) => {
    try {
        // ---- Find all notes from the database ----
        const notes = await Note.find();

        return res.status(200).json({
            message: "Notes fetched successfully",
            notes
        });

    } catch (error) {
        console.log("Error in Read note:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

// ---- Update note ----
export const updateNote = async (req, res) => {
    try {
        // ---- User provided data ----
        const { id } = req.params;
        const { description } = req.body;

        // ---- Validation ----
        const note = await NoteModel.findById(id);
        if (!note) return res.status(404).json({ error: "Note not found" });
        if (!description) return res.status(400).json({ error: "Description is required" });
        if (description.trim().length < 10) return res.status(400).json({ error: "Description must be at least 10 character long" });

        // ---- Updation description ----
        note.description = description;
        await note.save();

        return res.status(200).json({
            message: "Note updated successfully",
            note
        });

    } catch (error) {
        console.log("Error in Update note:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

// ---- Delete note ----
export const deleteNote = async (req, res) => {
    try {
        // ---- User provided data ----
        const { id } = req.params;

        // ---- Deleting note from database ----
        const noteDelete = await Note.findByIdAndDelete(id);

        // ---- validation ----
        if (!noteDelete) return res.status(404).json({ message: "Note not found" });

        return res.status(200).json({ message: "Note deleted successfully" });

    } catch (error) {
        console.log("Error in Delete note:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};