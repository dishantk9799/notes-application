// ---- Create note ----
export const createNote = async (req, res) => {
    try {

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

    } catch (error) {
        console.log("Error in Update note:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};

// ---- delete note ----
export const deleteNote = async (req, res) => {
    try {

    } catch (error) {
        console.log("Error in Delete note:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
};