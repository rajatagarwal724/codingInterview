#include<stdio.h>
#include<stdlib.h>

struct node {
int data;
struct node* next;
};

void push(struct node** head_ref, int new_data) {

	struct node* new_node = (struct node*)malloc(sizeof(struct node));

	new_node->data = new_data;
	new_node->next = (*head_ref);

	(*head_ref) = new_node;
}

void insertAfter(struct node* prev_node, int new_data) {

if(NULL == prev_node) {
	printf("The previous node can not be NULL\n");
	return;
}

struct node* new_node = (struct node*)malloc(sizeof(struct node));
new_node->data = new_data;
new_node->next = prev_node->next;

prev_node->next = new_node;
}

void append(struct node** head_ref, int new_data) {

struct node* new_node = (struct node*)malloc(sizeof(struct node));

new_node->data=new_data;
new_node->next = NULL;

struct node* last = *head_ref;

if(NULL == *head_ref) {
	*head_ref = new_node;
	return;
}

while(last->next) {
last = last->next;
}

last->next = new_node;
return;
}

void printList(struct node* head) {

	while(head) {
		printf("The required data to be printed is : %d\n",head->data);
		head = head->next;
	}
}

struct node* reverseSLL(struct node* head_ref) {

struct node* prev = NULL;
struct node* next_node = NULL;
struct node* current = head_ref;

while(current) {
	next_node = current->next;
	current->next = prev;
	prev = current;
	current = next_node;
}

return prev;
}
int main() {

struct node* head = NULL;

append(&head,6);

push(&head,7);

push(&head,1);

append(&head,4);

insertAfter(head->next,8);

printf("The Created Linked List is \n");
printList(head);

printf("Reversing the Linked List using Iterative approach..\n");
head = reverseSLL(head);
printList(head);
return 0;
}
