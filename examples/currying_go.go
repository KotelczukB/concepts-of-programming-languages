func multiply(a int) func(int) func(int) int {
	return func(b int) func(int) int{
		return func(c int) int {
			return a * b * c
		}
	}
}
func main() {
	fmt.Println(multiply(1)(2)(3)) // 6
}
