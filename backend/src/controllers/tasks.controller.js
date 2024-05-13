import Task from '../models/task.model.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id,
        }).populate("user");
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createTask = async (req, res) => {
    const { title, description, date } = req.body;

    try {
        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id,
        });

        await newTask.save();
        res.json(newTask);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate("user");
        if (!task) return res.status(404).json({ message: "Task not found" });

        res.json(task);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: "Task not found" });

        return res.status(204).json({ "message": "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};

export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).json({ message: "Task not found" });

        res.json(task);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};