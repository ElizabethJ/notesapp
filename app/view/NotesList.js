Ext.define("NotesApp.view.NotesList", {
	extend: "Ext.dataview.List",
	alias: "widget.noteslist",
	config: {
	    loadingText: "Loading Notes...",
	    emptyText: '</pre>
<div class="notes-list-empty-text">No notes found. </div>
<pre>',
	    onItemDisclosure: true,
	    itemTpl: '</pre>
<div class="list-item-title"> {title}</div>
<div class="list-item-narrative">{narrative}</div>
<pre>',
}
});