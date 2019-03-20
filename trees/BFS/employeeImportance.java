/*
// Employee info
class Employee {
    // It's the unique id of each node;
    // unique id of this employee
    public int id;
    // the importance value of this employee
    public int importance;
    // the id of direct subordinates
    public List<Integer> subordinates;
};
*/
class Solution {
    
    // Helper method to find employee by ID in a list
    public Employee findID(List<Employee> employees, int id) {
        for (int i = 0; i < employees.size(); i++) {
            if (employees.get(i).id == id) {
                return employees.get(i);
            }
        }    
        return null;
    }
    
    public int getImportance(List<Employee> employees, int id) {
        if (employees.size() == 1) { return findID(employees, id).importance; }

        // Set importance variable
        int importance = 0;

        // Get his own importance
        Employee employee = findID(employees, id);
        importance += employee.importance;

        // Do BFS on all his subordinates
        List<Integer> subordinates = employee.subordinates;
        while (!subordinates.isEmpty()) {
            int lastID = subordinates.remove(subordinates.size() - 1);
            Employee aSubordinate = findID(employees, lastID);
            importance += aSubordinate.importance;
            for (int i = 0; i < aSubordinate.subordinates.size(); i++) {
                int ID = aSubordinate.subordinates.get(i);
                subordinates.add(ID);
            }
        }
        return importance;
    }
}