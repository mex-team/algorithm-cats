package main

import (
	"fmt"
	"math"
);

func main() {
	var (
		name = []string{"A", "B", "C", "D", "E", "F"}
		a = []int{30, 35, 15, 5, 10, 20, 25}

		len int = len(a) - 1

		m [][]int = make([][]int, len)
		s [][]int = make([][]int, len)
	)
	for i := range m {
		m[i] = make([]int, len)
		s[i] = make([]int, len)
	}

	fmt.Println("最少需要的计算次数：", count(a, m, s))
	fmt.Println("矩阵相乘的顺序为： ", show(s, name, 0, len - 1))
}

func count(a []int, m [][]int, s [][]int) int {
	var (
		t int = 0
		min int = 0
		temp int = 0
	)

	// 以长度i为划分，i从2开始到输入内容长度截止
	for i := 2; i < len(a); i++ {

		// 循环a，因为i的长度至少为2，所以i和j在这个循环里面肯定不相等
		for j := 0; j < len(a) - i; j++ {
			t = j + i - 1
			m[j][t] = math.MaxInt32

			for k := j; k < t; k++ {

				temp = m[j][k] + m[k + 1][t] + a[j] * a[k + 1] * a[t + 1]

				if temp < m[j][t] {
					min = temp
					m[j][t] = temp
					s[j][t] = k
				}
			}
		}
	}

	return min
}

func show (s [][]int, name []string, i int, j int) string {
	var str string;
	if i == j {
		str += name[i]
	} else {
		str += "("
		str += show(s, name, i, s[i][j])
		str += show(s, name, s[i][j] + 1, j)
		str += ")"
	}
	return str
}