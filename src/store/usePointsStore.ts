import create from "zustand";
import { persist } from "zustand/middleware";

interface IPointsStorage {
	points: number;
	completedTodos: number;
	level: number;
	increasePoints: (amount: number) => void;
	increaseCompletedTodos: (amount: number) => void;
	increaseLevel: (amount: number) => void;
	decreasePoints: (amount: number) => void;
	decreaseCompletedTodos: (amount: number) => void;
	decreaseLevel: (amount: number) => void;
}

export const usePointsStore = create<IPointsStorage>(
	persist(
		(set, get) => ({
			points: 1000,
			completedTodos: 0,
			level: 0,
			increasePoints(amount: number) {
				set((state) => ({
					...state,
					points: state.points + amount,
				}));
			},
			decreasePoints(amount: number) {
				set((state) => ({
					...state,
					points: state.points - amount,
				}));
			},
			increaseCompletedTodos(amount: number) {
				set((state) => ({
					...state,
					completedTodos: state.completedTodos + amount,
				}));
			},
			decreaseCompletedTodos(amount: number) {
				set((state) => ({
					...state,
					completedTodos: state.completedTodos - amount,
				}));
			},
			increaseLevel(amount: number) {
				set((state) => ({
					...state,
					level: state.level + amount,
				}));
			},
			decreaseLevel(amount: number) {
				set((state) => ({
					...state,
					level: state.level - amount,
				}));
			},
		}),
		{
			name: "aqua:points", // unique name
		}
	)
);
