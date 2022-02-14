@extends('app')

@section('content')
<script>
    let post = {!! json_encode($data) !!}
    let posts = {!! json_encode($posts) !!};
</script>
    <div id="edit"></div>
@endsection