@extends('app')


@section('content')
<script>
    let posts = {!! json_encode($posts) !!};
    let comments = {!! json_encode($comments) !!};
    console.log({!! json_encode($globalData) !!});
</script>
  
    <div id="index"></div>
@endsection